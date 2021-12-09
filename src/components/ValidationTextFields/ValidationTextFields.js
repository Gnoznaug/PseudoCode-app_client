import { useState } from 'react'
import {useEffect} from 'react'
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const submitLeetcodeLink = async link => {
    const data = {url: link}

    await fetch('http://localhost:5000/ans',
    {
        'method':'POST',
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         },
        body: JSON.stringify(data)
  
      }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

export default function ValidationTextFields({ submitToServer }) {
    const [questionURL, setQuestionURL] = useState('')
    
    

    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="component-error">LeetCode problem link</InputLabel>
                <OutlinedInput
                    required
                    label="LeetCode problem link"
                    id="component-outlined"
                    onChange={e => setQuestionURL(e.target.value)}
                    onKeyDown={async e => {
                        if (e.key === 'Enter') {
                            await submitLeetcodeLink(questionURL);
                        }
                    }}
                />
            </FormControl>
        </div>
    );
}