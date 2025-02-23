import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Import the interface
import './SavedCandidates.css';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  const handleRemove = (index: number) => {
    const updatedCandidates = savedCandidates.filter((_, i) => i !== index);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates">
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates have been accepted</p>
      ) : (
        savedCandidates.map((candidate, index) => (
          <div key={candidate.login} className="candidate-card">
            <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
            <h2>{candidate.name}</h2>
            <p><strong>Username:</strong> {candidate.login}</p>
            <p><strong>Location:</strong> {candidate.location}</p>
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>Company:</strong> {candidate.company}</p>
            <p><strong>Bio:</strong> {candidate.bio}</p>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
            <button onClick={() => handleRemove(index)} className="remove-button">Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedCandidates;
