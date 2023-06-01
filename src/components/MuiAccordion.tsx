import React, {useState} from 'react'
import {Accordion, AccordionSummary, AccordionDetails, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (isExapnded: boolean, panel: string)=> {
    setExpanded(isExapnded ? panel : false)
  }
  return (
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'panel1')}>
          <AccordionSummary id={'panel-header'} aria-controls={'panel1-content'} expandIcon={<ExpandMore />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor purus nec finibus elementum.
              Nam lacinia tellus sit amet eros mollis bibendum. Pellentesque sagittis ultricies nulla, vitae vehicula sapien varius quis. Nullam eget turpis cursus, blandit felis eu, commodo magna.
              Nulla tincidunt, purus ac porttitor consectetur, dolor tellus auctor augue, ut vulputate erat elit ut purus.
              Curabitur sem nisi, suscipit id congue sit amet, pharetra eu nulla. Fusce vel metus lobortis, laoreet velit ut, condimentum nisi. Proin convallis odio leo, vitae rutrum nisi tincidunt nec. Mauris molestie rutrum eros eu lacinia.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'panel2')}>
          <AccordionSummary id={'panel2-header'} aria-controls={'panel2-content'} expandIcon={<ExpandMore />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor purus nec finibus elementum.
              Nam lacinia tellus sit amet eros mollis bibendum. Pellentesque sagittis ultricies nulla, vitae vehicula sapien varius quis. Nullam eget turpis cursus, blandit felis eu, commodo magna.
              Nulla tincidunt, purus ac porttitor consectetur, dolor tellus auctor augue, ut vulputate erat elit ut purus.
              Curabitur sem nisi, suscipit id congue sit amet, pharetra eu nulla. Fusce vel metus lobortis, laoreet velit ut, condimentum nisi. Proin convallis odio leo, vitae rutrum nisi tincidunt nec. Mauris molestie rutrum eros eu lacinia.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={(event, isExpanded)=> handleChange(isExpanded, 'panel3')}>
          <AccordionSummary id={'panel3-header'} aria-controls={'panel3-content'} expandIcon={<ExpandMore />}>
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor purus nec finibus elementum.
              Nam lacinia tellus sit amet eros mollis bibendum. Pellentesque sagittis ultricies nulla, vitae vehicula sapien varius quis. Nullam eget turpis cursus, blandit felis eu, commodo magna.
              Nulla tincidunt, purus ac porttitor consectetur, dolor tellus auctor augue, ut vulputate erat elit ut purus.
              Curabitur sem nisi, suscipit id congue sit amet, pharetra eu nulla. Fusce vel metus lobortis, laoreet velit ut, condimentum nisi. Proin convallis odio leo, vitae rutrum nisi tincidunt nec. Mauris molestie rutrum eros eu lacinia.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
  )
}
