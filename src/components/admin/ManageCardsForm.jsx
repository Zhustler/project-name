import React, { useState } from 'react';

const ManageCardsForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        stock: '',
        category: 'tickets',
        link: '',
        image: null
    });

    const fileInputRef = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.image) {
            alert('Veuillez sélectionner une image');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newCard = {
                title: formData.title,
                price: formData.price,
                stock: formData.stock,
                category: formData.category,
                link: formData.link,
                image: reader.result
            };

            // Sauvegarder dans le localStorage
            const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
            const updatedCards = [...existingCards, newCard];
            localStorage.setItem('cards', JSON.stringify(updatedCards));

            // Réinitialiser le formulaire
            setFormData({
                title: '',
                price: '',
                stock: '',
                category: 'tickets',
                link: '',
                image: null
            });

            // Réinitialiser l'input fichier
            fileInputRef.current.value = '';
            
            alert('Carte ajoutée avec succès!');
        };

        reader.readAsDataURL(formData.image);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="main-section">
            <h2>Gérer les articles</h2>
            <form id="cards-form" onSubmit={handleSubmit}>
                <div className="textInputWrapper">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titre de la carte"
                        className="textInput"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="textInputWrapper">
                    <input
                        type="number"
                        name="price"
                        placeholder="Prix"
                        className="textInput"
                        required
                        value={formData.price}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="textInputWrapper">
                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        className="textInput"
                        required
                        value={formData.stock}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="textInputWrapper">
                    <select
                        name="category"
                        className="textInput"
                        required
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="tickets">Billets</option>
                        <option value="merch">Merch</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
                <div className="textInputWrapper">
                    <input
                        type="url"
                        name="link"
                        placeholder="Lien de dépôt"
                        className="textInput"
                        required
                        value={formData.link}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="textInputWrapper">
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="textInput"
                        accept="image/*"
                        required
                        onChange={(e) => setFormData(prev => ({
                            ...prev,
                            image: e.target.files[0]
                        }))}
                    />
                    <button type="submit">Ajouter une carte</button>
                </div>
                
            </form>
        </div>
    );
};

export default ManageCardsForm;