import { useState } from 'react';

export default function AddEventForm() {
    const [eventData, setEventData] = useState({
        title: '',
        date: '',
        category: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem("events")) || [];
        events.push(eventData);
        localStorage.setItem("events", JSON.stringify(events));
        alert("Event added successfully!");
        setEventData({ title: '', date: '', category: '' });
    };

    return (
        <section className="main-section">
            <h2>Ajouter un événement</h2>
            <form id="add-event-form" onSubmit={handleSubmit}>
                <div className="textInputWrapper">
                    <input type="text" 
                        placeholder="Titre de l'événement" 
                        value={eventData.title}
                        onChange={(e) => setEventData({...eventData, title: e.target.value})}
                        required 
                                                className="textInput"

                    />
                </div>
                <div className="textInputWrapper">
                    <input type="date" 
                        value={eventData.date}
                        onChange={(e) => setEventData({...eventData, date: e.target.value})}
                        required 
                                                className="textInput"

                    />
                </div>
                <div className="textInputWrapper">
                    <input type="text" 
                        placeholder="Catégorie" 
                        value={eventData.category}
                        onChange={(e) => setEventData({...eventData, category: e.target.value})}
                        required
                        className="textInput"
                    />
                    <button type="submit">Ajouter un événement</button>
                </div>
                
            </form>
        </section>
    );
}