import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ButtonItem from './buttonItem';

export default function ButtonSection(props) {


    console.log(props);

    let listOfNumbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
    let listOfActions = ['/', '+', '-', 'x'];

    let listOfOtherActions = ['AC', '='];

    let [buttonList, setButtonList] = useState(listOfNumbers);

    let [actionsList, setActionsList] = useState(listOfActions);

    let [otherActionList, setOtherActionList] = useState(listOfOtherActions);


    return (
        <Box>

            <div id='actionListContainer' style={{
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: '15px',
                rowGap: '15px',
                justifyContent: 'center',
                margin: 8
            }}>
                {
                    actionsList.map((item) => {
                        return <ButtonItem {...props} type="action" value={item} />
                    })
                }
            </div>

            <div id='buttonListContainer' style={{
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: '15px',
                rowGap: '15px',
                justifyContent: 'center',
                margin: 8
            }}>

                {
                    buttonList.map((item) => {
                        return <ButtonItem {...props} type="button" value={item} />
                    })
                }
            </div>

            <div id='otherActionsContainer' style={{
                 display: 'flex',
                 flexWrap: 'wrap',
                 columnGap: '15px',
                 rowGap: '15px',
                 justifyContent: 'center',
                 margin: 8
            }}>

{
                    otherActionList.map((item) => {
                        return <ButtonItem {...props} type="otherActions" value={item} />
                    })
                }

            </div>

        </Box>
    )
}
