import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Repository } from './styles';

interface RepositoryDTO {
  src: string;
  title: string;
  description: string;
}

const Repositories: React.FC<RepositoryDTO> = ({
  src,
  title,
  description,
}: RepositoryDTO) => {
  return (
    <Repository>
      <Link to={`/details/${title}`}>
        <img src={src} alt="papai" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size="25" />
      </Link>
    </Repository>
  );
};

export default Repositories;
