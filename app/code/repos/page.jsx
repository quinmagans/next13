import Link from 'next/link'
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'


async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/quinmagans/repos', {
        next: {
            revalidate: 60,
        }
    });

    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }) // wait one second

    const repos = await res.json()
    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();
  return (
    <div className="repos-container">
        <h2>Repositories</h2>
        <ul className='repo-list'>
            {repos.map((repo) => (
                <li key={repo.id}>
                    <Link href={`/code/repos/${repo.name}`}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <div className="repo-details">
                            <span>
                                <FaStar className="icon" /> {repo.stargazers_count}
                            </span>
                            <span>
                                <FaCodeBranch className="icon" /> {repo.forks_count}
                            </span>
                            <span>
                                <FaEye className="icon" /> {repo.watchers_count}
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ReposPage