import React from 'react';

const Team = ({ person }) => {
  return (
    <div className="bg-black p-6 rounded-lg">
      <img
        src={person.img}
        alt="Team Member"
        className="w-16 h-16 rounded-full mx-auto"
      />
      <div className="font-bold mt-3 text-lg text-center text-white">
        {person.name}
      </div>
      <div className="text-gray-300 text-sm text-center">{person.title}</div>
      <div className="mt-4 text-center">
        <a
          href={`mailto:${person.email}`}
          className="text-white font-bold text-sm"
        >
          {person.email}
        </a>
      </div>
    </div>
  );
};

export default Team;
