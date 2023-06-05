import {Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";
export const MuiTable = () => {
  return (
      <TableContainer component={Paper} sx={{maxHeight: '200px'}}>
        <Table aria-label={'simple table'} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell align={'center'}>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row)=>(
              <TableRow
                  key={row.id}
                  sx={{'&:last-child td, &:last-child th': {border:0}}}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align={'center'}>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

const tableData = [
  {
    "id": 1,
    "first_name": "Karlee",
    "last_name": "Pepis",
    "email": "kpepis0@newsvine.com"
  },
  {
    "id": 2,
    "first_name": "Deborah",
    "last_name": "Addionizio",
    "email": "daddionizio1@dailymail.co.uk"
  },
  {
    "id": 3,
    "first_name": "Billie",
    "last_name": "Doel",
    "email": "bdoel2@vkontakte.ru"
  },
  {
    "id": 4,
    "first_name": "Chicky",
    "last_name": "Ridhole",
    "email": "cridhole3@forbes.com"
  },
  {
    "id": 5,
    "first_name": "Hildy",
    "last_name": "McNeill",
    "email": "hmcneill4@va.gov"
  },
  {
    "id": 6,
    "first_name": "Elbert",
    "last_name": "Dietz",
    "email": "edietz5@geocities.jp"
  },
  {
    "id": 7,
    "first_name": "Ezekiel",
    "last_name": "Lavin",
    "email": "elavin6@acquirethisname.com"
  },
  {
    "id": 8,
    "first_name": "Laurie",
    "last_name": "Wadforth",
    "email": "lwadforth7@bizjournals.com"
  },
  {
    "id": 9,
    "first_name": "Sky",
    "last_name": "Pedron",
    "email": "spedron8@pagesperso-orange.fr"
  },
  {
    "id": 10,
    "first_name": "Kaycee",
    "last_name": "Cherrett",
    "email": "kcherrett9@eventbrite.com"
  }
]