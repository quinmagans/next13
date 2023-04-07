import React from 'react'
import Link from 'next/link'
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepo(name) {
    const response = await fetch(`https://api.github.com/repos/quinmagans/${name}`, {
        next: {
            revalidate: 60,
        }
    });
    const repo = await response.json()
    return repo;
}

const Repo = async ({name}) => {
    const repo = await fetchRepo(name); 
    return <>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <div className="card-stats">
            <div className="card-stat">
                <FaStar className="icon" /> {repo.stargazers_count}
            </div>
            <div className="card-stat">
                <FaCodeBranch className="icon" /> {repo.forks_count}
            </div>
            <div className="card-stat">
                <FaEye className="icon" /> {repo.watchers_count}
            </div>
        </div>
    </>
}

export default Repo;
