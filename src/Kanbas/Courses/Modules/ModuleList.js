import React from 'react';
import { useParams } from 'react-router-dom';
import db from '../../Database';
import './index.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-modules-list">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item wd-module-item mb-4">
            <div className="module-content">
              <h5>{module.name}</h5>
              <span class="wd-check-ellipse-button-float-end float-end">
                <AiFillCheckCircle color="green" />
                <HiOutlineEllipsisVertical />
              </span>
            </div>
            <div className="wd-module-body">
              <p>{module.description}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
