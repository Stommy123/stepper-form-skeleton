import React from 'react';

export const AboutForm = _ => (
  <>
    <div className='form-group'>
      <label>Favorite Pet</label>
      <input type='text' placeholder='Favorite Pet' />
    </div>
    <div className='form-group'>
      <label>Dream Vacation</label>
      <input type='text' placeholder='Dream Vacation' />
    </div>
  </>
);

export const CareerForm = _ => (
  <>
    <div className='form-group'>
      <label>Employer</label>
      <input type='text' placeholder='Employer' />
    </div>
    <div className='form-group'>
      <label>Job Title</label>
      <input type='text' placeholder='Job Title' />
    </div>
    <div className='form-group'>
      <label>Length of Employment (Years)</label>
      <select>
        {[1, 2, 3, 4, 5, 6].map(duration => (
          <option key={duration} value={duration}>
            {duration}
          </option>
        ))}
      </select>
    </div>
  </>
);

export const Confirm = _ => (
  <>
    {Object.entries({}).map(([field, value]) => (
      <div key={field} className='response'>
        {field} - {value}
      </div>
    ))}
  </>
);

export const GeneralForm = _ => (
  <>
    <div className='form-group'>
      <label>First Name</label>
      <input required type='text' placeholder='First Name' />
    </div>
    <div className='form-group'>
      <label>Last Name</label>
      <input required type='text' placeholder='Last Name' />
    </div>
    <div className='form-group'>
      <label>Are you an admin?</label>
      <input type='checkbox' />
    </div>
  </>
);

export const PreviousButton = ({ activeSchema }) =>
  activeSchema.previous ? (
    <div className='previous'>
      <h3>Previous</h3>
    </div>
  ) : null;

export const SubmitButton = ({ activeSchema }) => (
  <div className='form-group submit-group'>
    <button type='submit'>{activeSchema.next ? 'Next!' : 'Submit!'}</button>
  </div>
);
