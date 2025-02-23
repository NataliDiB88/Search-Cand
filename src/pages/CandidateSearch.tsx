import React, { useEffect, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface'; // Import the interface
import './CandidateSearch.css';

const CandidateSearch: React.FC = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    try {
      const candidates: Candidate[] = await searchGithub();
      if (candidates.length > 0) {
        const data: Candidate = await searchGithubUser(candidates[0].login);
        setCandidate(data);
      } else {
        setError('No candidates available');
      }
    } catch (error) {
      setError('Error fetching candidates');
      console.error('Error fetching candidate:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = () => {
    if (candidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      savedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
    }
    fetchNextCandidate();
  };

  const handleReject = () => {
    fetchNextCandidate();
  };

  const fetchNextCandidate = async () => {
    setLoading(true);
    setError(null);
    await fetchCandidate();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!candidate) {
    return <p>No candidate available</p>;
  }

  return (
    <div className="candidate-search">
      <div className="candidate-card">
        <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} />
        <h2>{candidate.name}</h2>
        <p><strong>Username:</strong> {candidate.login}</p>
        <p><strong>Location:</strong> {candidate.location}</p>
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Company:</strong> {candidate.company}</p>
        <p><strong>Bio:</strong> {candidate.bio}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
        <div className="candidate-actions">
          <button onClick={handleAccept} className="accept-button">+</button>
          <button onClick={handleReject} className="reject-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;