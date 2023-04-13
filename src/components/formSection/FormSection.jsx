import React, { useState } from "react";
import "./formsection.css";
import Swal from "sweetalert2";

function FormSection() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [additionalRequirements, setAdditionalRequirements] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            !name ||
            !phone ||
            !pickupLocation ||
            !dropOffLocation ||
            !date ||
            !time
        ) {
            setErrorMessage("Please fill out all required fields.");
        } else if (!isValidDate(date) || !isValidTime(time)) {
            setErrorMessage("Please enter a valid date and time.");
        } else {
            setIsFormSubmitted(true);
            Swal.fire({
                icon: 'success',
                title: 'Booked!',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                handleReset();
            });

        }
    };
    const handlePhoneChange = (event) => {
        const value = event.target.value;
        const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!value) {
            setPhoneError("Please enter a phone number");
        } else if (!phonePattern.test(value)) {
            setPhoneError(
                "Please enter a valid phone number in the format xxx-xxx-xxxx"
            );
        } else {
            setPhone(value);
            setPhoneError("");
        }
    };

    const isValidDate = (date) => {
        const currentDate = new Date().toISOString().slice(0, 10);
        return date >= currentDate;
    };

    const isValidTime = (time) => {
        const currentTime = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        return time >= currentTime;
    };

    const handleReset = () => {
        setName("");
        setPhone("");
        setPickupLocation("");
        setDropOffLocation("");
        setDate("");
        setTime("");
        setAdditionalRequirements("");
        setIsFormSubmitted(false);
        setErrorMessage("");
    };

    return (
        <div className=" from-section p-4 bg-[#ff9800]">
            <form onSubmit={handleSubmit}>
                <h2 className=" text-3xl font-bold mb-3">Book a Taxi</h2>
                <div className="sublevel flex gap-2 items-center justify-between">
                    <label>
                        Full name:
                        <input
                            type="text"
                            placeholder="Full name*"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Phone no:
                        <input
                            type="number"
                            placeholder="Phone number*"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Pickup Location:
                        <input
                            type="text"
                            placeholder="Pickup Location*"
                            value={pickupLocation}
                            onChange={(event) => setPickupLocation(event.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className="sublevel flex gap-2 items-center justify-between">
                    <label>
                        Drop-off Location:
                        <input
                            type="text"
                            placeholder="Drop-off Location*"
                            value={dropOffLocation}
                            onChange={(event) => setDropOffLocation(event.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Date:
                        <input
                            type="date"
                            placeholder="Date*"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Time:
                        <input
                            type="time"
                            placeholder="Time*"
                            value={time}
                            onChange={(event) => setTime(event.target.value)}
                            required
                        />
                    </label>
                </div>
                <div className=" flex flex-col gap-2 w-full items-center ">
                    <label className=" text-lg font-semibold">Additional Requirements: </label>
                    <div className="flex items-center justify-between w-full gap-2 sm:flex-col ">
                        <div className=" flex-[3] w-full">
                            <textarea
                                cols={3}
                                rows={3}
                                value={additionalRequirements}
                                onChange={(event) =>
                                    setAdditionalRequirements(event.target.value)
                                }
                                placeholder="Additional text"
                            />

                            {errorMessage && <p>{errorMessage}</p>}
                        </div>
                        <div className=" flex-1 gap-2 flex flex-col items-center justify-between w-full">
                            <button className="btn w-full" type="submit">
                                Submit
                            </button>
                            <button className="btn w-full" onClick={handleReset}>
                                Cancle
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormSection;
