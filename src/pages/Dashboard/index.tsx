import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  Title,
  Form,
  Users,
  Error,
  UserContainer,
  UserRepositories,
} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!newRepo) {
        setInputError('Digite o autor/nome do repositório');
        return;
      }

      try {
        const response = await api.get<Repository>(`repos/${newRepo}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewRepo('');
        setInputError('');
      } catch (err) {
        setInputError('Erro na busca por esse repositório');
      }
    },
    [newRepo, repositories],
  );

  return (
    <>
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

      <Users>
        <UserContainer>
          <button type="button">
            <img
              src="https://avatars1.githubusercontent.com/u/27422266?v=4"
              alt="Eu"
            />
            <div>
              <strong>BrunoViveiros</strong>
              <p>A javascript enthusiast.</p>
            </div>

            <FiChevronDown size={20} />
          </button>

          <UserRepositories>
            <Link to="/repositories/brunoviveiros/github-explorer">
              <img src="https://via.placeholder.com/300?text=A" alt="Eu" />
              <div>
                <strong>BrunoViveiros/github-explorer</strong>
                <p>Salve seus repositorios preferidos com o GithubExplorer.</p>
              </div>

              <FiChevronRight size={20} />
            </Link>

            <Link to="/repositories/brunoviveiros/github-explorer">
              <img src="https://via.placeholder.com/300?text=A" alt="Eu" />
              <div>
                <strong>BrunoViveiros/github-explorer</strong>
                <p>Salve seus repositorios preferidos com o GithubExplorer.</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          </UserRepositories>
        </UserContainer>
      </Users>
    </>
  );
};

export default Dashboard;
