import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ProjectType } from '../../../types/Project';

interface ProjectListProps {
    data: ProjectType;
}

const ProjectList = ({ data }: ProjectListProps) => {
    const { label, count } = data;

    return (
        <div className="flex justify-between items-center text-sm rounded-sm py-2.5 px-3.5 hover:cursor-pointer hover:bg-[#a8a8a833]">
            <div className="flex items-center">
                <FontAwesomeIcon
                    icon={faCircle}
                    className="mt-0 mr-2 text-[8px] text-[#0000004d]"
                />
                <p className="text-xs">{label}</p>
            </div>
            <div className="text-gray-500 text-xs">
                <p>{count}</p>
            </div>
        </div>
    );
};

export default ProjectList;
