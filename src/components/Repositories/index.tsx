import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

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
      <a href="test">
        <img src={src} alt="papai" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size="25" />
      </a>

      <a href="test">
        <img src={src} alt="papai" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size="25" />
      </a>

      <a href="test">
        <img src={src} alt="papai" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size="25" />
      </a>

      <a href="test">
        <img src={src} alt="papai" />
        <div>
          <strong>{title}</strong>
          <p>{description}</p>
        </div>
        <FiChevronRight size="25" />
      </a>
    </Repository>
  );
};

export default Repositories;
