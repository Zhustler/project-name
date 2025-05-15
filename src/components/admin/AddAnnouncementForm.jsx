import React, { useState } from 'react';

const AddAnnouncementForm = () => {
    const [announcementTitle, setAnnouncementTitle] = useState('');
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [announcementLink, setAnnouncementLink] = useState('');
    const [announcementCategory, setAnnouncementCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create new announcement object
        const newAnnouncement = {
            title: announcementTitle,
            file: file ? file.name : "No file uploaded",
            description: description,
            link: announcementLink,
            category: announcementCategory
        };

        // Get existing announcements from localStorage
        const existingAnnouncements = JSON.parse(localStorage.getItem('announcements')) || [];
        
        // Add new announcement
        const updatedAnnouncements = [...existingAnnouncements, newAnnouncement];
        
        // Save to localStorage
        localStorage.setItem('announcements', JSON.stringify(updatedAnnouncements));
        
        // Reset form fields
        setAnnouncementTitle('');
        setFile(null);
        setDescription('');
        setAnnouncementLink('');
        setAnnouncementCategory('');
        
        // Clear file input
        document.getElementById('add-file').value = '';
        
        alert('Annonce ajoutée avec succès!');
    };

    return (
        <section className="main-section">
            <h2>Ajouter une annonce</h2>
            <form id="add-announcement-form" onSubmit={handleSubmit}>
                <div className="textInputWrapper">
                    <input
                        type="text"
                        id="announcement-title"
                        className="textInput"
                        placeholder="Titre de l'annonce"
                        required
                        value={announcementTitle}
                        onChange={(e) => setAnnouncementTitle(e.target.value)}
                    />
                </div>
                <div className="textInputWrapper">
                    <input
                        type="file"
                        id="add-file"
                        className="textInput"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="textInputWrapper">
                    <input
                        type="text"
                        id="description"
                        className="textInput"
                        placeholder="Description"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="textInputWrapper">
                    <input
                        type="url"
                        id="announcement-link"
                        className="textInput"
                        placeholder="Lien"
                        required
                        value={announcementLink}
                        onChange={(e) => setAnnouncementLink(e.target.value)}
                    />
                </div>
                <div className="textInputWrapper">
                    <select
                        id="announcement-category"
                        className="textInput"
                        required
                        value={announcementCategory}
                        onChange={(e) => setAnnouncementCategory(e.target.value)}
                    >
                        <option value="" disabled>
                            Catégorie
                        </option>
                        <option value="faculty">Faculté</option>
                        <option value="Club">Club</option>
                        
                    </select>
                         <button type="submit">Ajouter une annonce</button>
                </div>
           
            </form>
        </section>
    );
};

export default AddAnnouncementForm;