import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem'

import '../styles/repositories.scss'

const repository = {
  name: 'unform2',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
}
//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Lista de repositórios </h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}