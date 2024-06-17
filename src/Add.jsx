import { useState } from "react";

export default function Add({ people, setPeople, isAdding, setIsAdding }) {
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [imageUploaded, setImageUploaded] = useState("");
    const [imagePreview, setImagePreview] = useState("");
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/([0-9]{4})$/ 
    function handleImageChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUploaded(reader.result);
                setImagePreview(URL.createObjectURL(file));
            };
            reader.readAsDataURL(file);
        } else {
            setImageUploaded("../public/avatar.jpg");
            setImagePreview();
        }
    }

    function save() {
        const newPerson = {
            id: people.length + 1,
            name,
            image: imageUploaded || "../public/avatar.jpg",
            date: birthday
        };
        setPeople([...people, newPerson]);
        setIsAdding(false);
    }

    return (
        <>
            {isAdding ? (
                <>
                    <form method="post" encType="multipart/form-data">
                        <div className="border border-primary mx-3 px-3 py-3 rounded">
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="name..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="birthdayInput" className="form-label">Birthday</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="birthdayInput"
                                    placeholder="dd/mm/yyyy"
                                    value={birthday}
                                    onChange={(e) => setBirthday(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imageInput" className="form-label">Image</label> &nbsp;
                                <input
                                    type="file"
                                    accept="image/jpeg, image/png, image/jpg"
                                    id="imageInput"
                                    onChange={handleImageChange}
                                />
                            </div>
                            

                            {
                                name.length >= 3 && dateRegex.test(birthday)? (<button type="button" className="btn btn-primary" onClick={save}>Add</button>) : ""
                                
                            }

                            <button type="button" className="btn btn-danger mx-2" onClick={() => setIsAdding(false)}>Back</button>
                        </div>
                    </form>
                </>
            ) : ""}
        </>
    );
}
