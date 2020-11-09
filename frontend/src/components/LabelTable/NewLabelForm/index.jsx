import React, {useState}from 'react';
import {NewLabelFormContainer, LabelPreview} from './style';

const NewLabelForm = () => {
  const [labelTitle, setLabelTitle] = useState('');
  const [labelDescription, setLabelDescription] = useState('');
  const [labelColor, setLabelColor] = useState('#ffffff');

return (<NewLabelFormContainer>
  <LabelPreview bgcolor={labelPreviewColor}/>
  <div>


  </div>

</NewLabelFormContainer>);
}

export default NewLabelForm