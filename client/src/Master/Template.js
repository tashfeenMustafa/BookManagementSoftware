import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import './Template.css';
import { rows } from './templateRows.js';
import TextField from '@mui/material/TextField';

function initializeEditTitleArray() {
    let count = 0

    for (let i = 0; i < rows.length; i++) {
        count++

        if (rows[i].multipleReports) {
            for (let j = 0; j < rows[i].multipleReports.length; j++) {
                count++

                if (rows[i].multipleReports[j].content) {
                    for (let k = 0; k < rows[i].multipleReports[j].content.length; k++) {
                        count++
                    }
                }
            }
        }
    }
    
    return new Array(count).fill(false)
}

export default function Template() {
    const [editTitle, setEditTitle] = React.useState(() => {
        return initializeEditTitleArray()
    });
    const [investmentChecked, setInvestmentChecked] = React.useState(false)
    const [technicalChecked, setTechnicalChecked] = React.useState(false)
    const [onFundedChecked, setOnFundedChecked] = React.useState(false)

    const [investmentAccordionStyle, setInvestmentAccordionStyle] = React.useState({ display: 'none' })
    const [technicalAccordionStyle, setTechnicalAccordionStyle] = React.useState({ display: 'none' })
    const [onFundedAccordionStyle, setOnFundedAccordionStyle] = React.useState({ display: 'none' })

    const [investmentSectorContentAccordionStyle, setInvestmentSectorContentAccordionStyle] = React.useState({ display: 'none' })
    const [technicalSectorContentAccordionStyle, setTechnicalSectorContentAccordionStyle] = React.useState({ display: 'none' })
    const [onFundedSectorContentAccordionStyle, setOnFundedSectorContentAccordionStyle] = React.useState({ display: 'none' })

    const [allDocumentsCheckboxState, setAllDocumentsCheckboxState] = React.useState(() => {
        
        let count = 0

        for (let i = 0; i < rows.length; i++) {
            count++

            if (rows[i].multipleReports) {
                for (let j = 0; j < rows[i].multipleReports.length; j++) {
                    count++

                    if (rows[i].multipleReports[j].content) {
                        for (let k = 0; k < rows[i].multipleReports[j].content.length; k++) {
                            count++
                        }
                    }
                }
            }
        }
        
        return new Array(count).fill(true)
    })

    const [templateForDetails, setTemplateForDetails] = React.useState(() => {
        let count = 0

        for (let i = 0; i < rows.length; i++) {
            count++ 

            if (rows[i].multipleReports) {
                for (let j = 0; j < rows[i].multipleReports.length; j++) {
                    count++

                    if (rows[i].multipleReports[j].content) {
                        for (let k = 0; k < rows[i].multipleReports[j].content.length; k++) {
                            count++
                        }
                    }
                }
            }
        }

        let template = new Array(count)

        for (let i = 0; i < rows.length; i++) {
            template[rows[i].id - 1] = { id: rows[i].id, title: rows[i].documentTitle, docType: rows[i].docType }  

            if (rows[i].multipleReports) {
                for (let j = 0; j < rows[i].multipleReports.length; j++) {
                    template[rows[i].multipleReports[j].sectorId - 1] = { id: rows[i].multipleReports[j].sectorId, title: rows[i].multipleReports[j].sectorName, docType: rows[i].multipleReports[j].docType }

                    if (rows[i].multipleReports[j].content) {
                        for (let k = 0; k < rows[i].multipleReports[j].content.length; k++) {
                            template[rows[i].multipleReports[j].content[k].id - 1] = { id: rows[i].multipleReports[j].content[k].id, title: rows[i].multipleReports[j].content[k].documentTitle, docType: rows[i].multipleReports[j].content[k].docType }
                        }
                    }
                }
            }
        }
        console.log(template)
        return template
    })

    const markChecked = (documentTitle) => {
        if (documentTitle === "Investment") {
            return investmentChecked
        }
        else if (documentTitle === "Technical") {
            return technicalChecked
        }
        else if (documentTitle === "On-Funded") {
            return onFundedChecked
        }
    }

    const multipleReportsCssStyle = (documentTitle) => {
        if (documentTitle === "Investment") {
            return investmentAccordionStyle
        }
        else if (documentTitle === "Technical") {
            return technicalAccordionStyle
        }
        else if (documentTitle === "On-Funded") {
            return onFundedAccordionStyle
        }
    }

    const multipleReportsContentsCssStyle = (documentTitle) => {
        if (documentTitle === "Investment") {
            return investmentSectorContentAccordionStyle
        }
        else if (documentTitle === "Technical") {
            return technicalSectorContentAccordionStyle
        }
        else if (documentTitle === "On-Funded") {
            return onFundedSectorContentAccordionStyle
        }
    }

    const handleChange = (event) => {
        let value = event.target.value

        if (value === "Investment") {
            setInvestmentChecked(event.target.checked)
            setInvestmentAccordionStyle((prevInvestmentAccordionStyle) => {
                if (prevInvestmentAccordionStyle.display === "none") {
                    return { display: 'table-row' }
                }
                return { display: 'none' }
            })

            setInvestmentSectorContentAccordionStyle((prevContentAccordionStyle) => {
                if (prevContentAccordionStyle.display === "none") {
                    return { display: 'table-row' }
                }
                return { display: 'none' }
            })
        }
        else if (value === "Technical") {
            setTechnicalChecked(event.target.checked)
            setTechnicalAccordionStyle((prevTechnicalAccordionStyle) => {
                if (prevTechnicalAccordionStyle.display === "none") {
                    return { display: 'table-row' }
                }
                return { display: 'none' }
            })

            setTechnicalSectorContentAccordionStyle((prevContentAccordionStyle) => {
                if (prevContentAccordionStyle.display === "none") {
                    return { display: 'table-row' }
                }
                return { display: 'none' }
            })
        }
        else if (value === "On-Funded") {
            setOnFundedChecked(event.target.checked)
            setOnFundedAccordionStyle((prevOnFundedAccordionStyle) => {
                if (prevOnFundedAccordionStyle.display === "none") {
                    return { display: 'table-row' }
                }
                return { display: 'none' }
            })

            setOnFundedSectorContentAccordionStyle((prevContentAccordionStyle) => {
                if (prevContentAccordionStyle.display === "none") {
                    return { display: 'table-row' }
                }
                return { display: 'none' }
            })
        }
    };

    const handleEditDocumentTitle = (position) => {
        let tempEditTitle = initializeEditTitleArray()

        tempEditTitle[position] = !tempEditTitle[position]
        //console.log(tempEditTitle)
        setEditTitle(tempEditTitle)
    }

    const handleOnSelectChange = (position, document) => {
        let updatedTemplateForDetails = [...templateForDetails]
        let tempAllDocumentsCheckboxState = [...allDocumentsCheckboxState]
        let updatedCheckedState = []

        if (document.docType === 'multiple_report') {
            console.log(position)
            for (let i = position; i < position + 60; i++) {
                tempAllDocumentsCheckboxState[i] = !tempAllDocumentsCheckboxState[i]
                if (tempAllDocumentsCheckboxState[i]) {
                    if (updatedTemplateForDetails[i] !== document) {
                        updatedTemplateForDetails[i] = document
                    }
                } 
                else {
                    updatedTemplateForDetails[i] = {}
                }
            }
            console.log(updatedTemplateForDetails)
            updatedCheckedState = tempAllDocumentsCheckboxState
        }
        else if (document.docType.includes('investment_sector') || document.docType.includes('technical_sector') || document.docType.includes('on_funded_sector')) {
            console.log(position)
            for (let i = position; i < position + 5; i++) {
                tempAllDocumentsCheckboxState[i] = !tempAllDocumentsCheckboxState[i]
                if (tempAllDocumentsCheckboxState[i]) {
                    if (updatedTemplateForDetails[i] !== document) {
                        updatedTemplateForDetails[i] = document
                    }
                } 
                else {
                    updatedTemplateForDetails[i] = {}
                }
            }
            console.log(updatedTemplateForDetails)
            updatedCheckedState = tempAllDocumentsCheckboxState
        }
        else {
            updatedCheckedState = allDocumentsCheckboxState.map((item, index) =>{
                let it = item

                if (index === position) {
                    it = !item 
                    if (it) {
                        if (updatedTemplateForDetails[position] !== document) {
                            updatedTemplateForDetails[position] = document
                        }
                    }
                    else {
                        updatedTemplateForDetails[position] = {}
                    }
                }
                return it
            });
        }

        setTemplateForDetails(updatedTemplateForDetails)

        setAllDocumentsCheckboxState(updatedCheckedState)
        
    }

    return (
        <div style={{ height: '650px', overflow: 'auto', border: '1px solid grey', marginTop: '2%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 350 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary" />
                            </TableCell>
                            <TableCell className="editTitleColumn">
                                Edit Title
                            </TableCell>
                            <TableCell className="idColumn">
                            ID 
                            </TableCell>
                            <TableCell>
                            Document Title 
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => {
                                return (
                                    row.multipleReports ? 
                                    <>
                                        <TableRow 
                                            className="multipleReportsRow" 
                                            key={row.id}>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    disableRipple={true}
                                                    value={row.documentTitle ? row.documentTitle : ''}
                                                    name={row.docType}
                                                    color="primary"
                                                    checked={allDocumentsCheckboxState[row.id - 1]} 
                                                    onChange={() => handleOnSelectChange(row.id - 1, { id: row.id, title: row.documentTitle, docType: row.docType })}/>
                                            </TableCell>
                                            <TableCell className="editTitleColumn">
                                                <EditIcon />
                                            </TableCell>
                                            <TableCell className="idColumn">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>
                                                {row.documentTitle}
                                                <Switch
                                                    value={row.documentTitle}
                                                    checked={markChecked(row.documentTitle)}
                                                    onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }} />
                                                
                                            </TableCell>
                                        </TableRow>
                                        {
                                            row.multipleReports.map((sector) => {
                                                return (
                                                    <>
                                                        <TableRow 
                                                            sx={multipleReportsCssStyle(row.documentTitle)}
                                                            className={"sectorRow-" + row.documentTitle} 
                                                            key={sector.sectorId}>
                                                            <TableCell padding="checkbox">
                                                                <Checkbox
                                                                    disableRipple={true}
                                                                    value={sector.sectorName ? sector.sectorName : ''}
                                                                    name={sector.docType}
                                                                    color="primary"
                                                                    checked={allDocumentsCheckboxState[parseInt(sector.sectorId) - 1]} 
                                                                    onChange={() => handleOnSelectChange(sector.sectorId - 1, { id: sector.sectorId, title: sector.sectorName, docType: sector.docType })}/>
                                                            </TableCell>
                                                            <TableCell className="editTitleColumn">
                                                                <EditIcon />
                                                            </TableCell>
                                                            <TableCell className="idColumn">
                                                            </TableCell>
                                                            <TableCell sx={{ paddingLeft: '43px' }}>
                                                                {sector.sectorName}
                                                            </TableCell>
                                                        </TableRow>
                                                        {
                                                            sector.content.map((content) => {
                                                                return (
                                                                    <TableRow 
                                                                        sx={multipleReportsContentsCssStyle(row.documentTitle)}
                                                                        className={"sectorContentRow-" + row.documentTitle} 
                                                                        key={content.id}>
                                                                        <TableCell padding="checkbox">
                                                                            <Checkbox
                                                                                disableRipple={true}
                                                                                value={content.documentTitle ? content.documentTitle : ''}
                                                                                name={content.docType}
                                                                                color="primary"
                                                                                checked={allDocumentsCheckboxState[content.id - 1]} 
                                                                                onChange={() => handleOnSelectChange(content.id - 1, { id: content.id, title: content.documentTitle, docType: content.docType })}/>
                                                                        </TableCell>
                                                                        <TableCell className="editTitleColumn">
                                                                            <EditIcon />
                                                                        </TableCell>
                                                                        <TableCell className="idColumn">
                                                                        </TableCell>
                                                                        <TableCell sx={{ paddingLeft: '63px' }}>
                                                                            {content.documentTitle}
                                                                        </TableCell>
                                                                    </TableRow> 
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </> 
                                    :
                                    <TableRow key={row.id}>
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                disableRipple={true}
                                                value={row.documentTitle ? row.documentTitle : ''}
                                                name={row.docType}
                                                color="primary"
                                                checked={allDocumentsCheckboxState[row.id  - 1]} 
                                                onChange={() => handleOnSelectChange(row.id - 1, { id: row.id, title: row.documentTitle, docType: row.docType })} />
                                        </TableCell>
                                        <TableCell className="editTitleColumn">
                                            <EditIcon onClick={() => handleEditDocumentTitle(row.id - 1)} />
                                        </TableCell>
                                        <TableCell className="idColumn">
                                            {row.id}
                                        </TableCell>
                                        <TableCell>
                                            {   
                                                editTitle[row.id - 1] ?
                                                    <TextField label={row.documentTitle} variant="standard" />
                                                :
                                                    row.documentTitle
                                            }
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}