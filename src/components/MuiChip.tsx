import {Stack, Chip, Avatar} from "@mui/material";
import Face from '@mui/icons-material/Face'
import {useState} from "react";
export const MuiChip = () => {
  const [chips, setChips] = useState(['chip1', 'chip2', 'chip3']);
  const handleDelete = (chipToDelete: string) => {
    setChips(chips => chips.filter(chip=> chip!==chipToDelete) )
  }
  return (
      <Stack direction={'row'} spacing={1}>
        <Chip label={'chip'} color={'primary'} avatar={<Avatar>G</Avatar>}/>
        <Chip label={'chip'} color={'secondary'} size={'small'} icon={<Face />}/>
        <Chip label={'chip outlined'} color={'secondary'} size={'small'} variant={'outlined'} avatar={<Avatar>C</Avatar>}/>
        <Chip label={'Click'} color={'success'} onClick={()=>alert('Clicked')}/>
        <Chip label={'Delete'} color={'error'} onClick={()=>alert('Clicked')} onDelete={()=> alert('Delete Clicked')}/>
        {chips?.map((chip, idx)=>(
            <Chip label={chip} key={chip+idx} onDelete={()=>handleDelete(chip)}/>
        ))}
      </Stack>
  )
}
