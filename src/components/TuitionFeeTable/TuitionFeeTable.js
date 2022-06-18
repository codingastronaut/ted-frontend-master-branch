import React from "react";
import styled from "styled-components";
import Typography from "src/components/Typography";
import { mediaQuery } from "src/utils/styles";



const StylTable = styled.table`
 width: 100%;
 border-collapse: separate !important;
 border: 1px solid #DFDFDF;
 border-radius: 0.875rem;
 background: #FFFFFF;
 text-align: left;
 overflow: hidden;
`;

const TableHeader = styled.thead`
`;
const StyleRow = styled.tr`
border-collapse: collapse;
background: #FFFFFF;
`;

const StyleTableHeading = styled.th`
border: 1px solid #DFDFDF;
border-collapse: collapse;
padding:  1rem 1.4rem;
background: #E7FDF6;
:first-of-type {
    background: none;
    
}



`;
const TableData = styled.td`
border: 1px solid #DFDFDF;
border-collapse: collapse;
background: #FFFFFF;
padding: 1rem;
text-align: left;
`;

const LinedTypography = styled(Typography)`
    white-space: wrap;
    
    ${mediaQuery("mobileL")} {
        white-space: nowrap;
        
      }
`

const TuitionFeeTable = () => {
    return (
        <>
            <StylTable>
                <TableHeader>
                    <StyleRow>
                        <StyleTableHeading >
<LinedTypography>
                            Students home region
                            </LinedTypography>
                        </StyleTableHeading>

                        <StyleTableHeading>

                            Studying in England

                        </StyleTableHeading>

                        <StyleTableHeading>

                            Studying in Scotland

                        </StyleTableHeading>
                        <StyleTableHeading>

                            Studying in Wales

                        </StyleTableHeading>
                        <StyleTableHeading>

                            Studying in Ireland

                        </StyleTableHeading>
                    </StyleRow>
                </TableHeader>
                <StyleRow>

                    <TableData>

                        England

                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>


                </StyleRow>

                <StyleRow>

                    <TableData>

                        Scotland

                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>


                </StyleRow>

                <StyleRow>

                    <TableData>

                        Wales

                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>


                </StyleRow>

                <StyleRow>

                    <TableData>

                        Northern Ireland

                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>
                    <TableData>
                        Up to £9,250
                    </TableData>


                </StyleRow>


                <StyleRow>

                    <TableData>

                        EU and other

                    </TableData>
                    <TableData>
                        Variable
                    </TableData>
                    <TableData>
                        Variable
                    </TableData>
                    <TableData>
                        Variable
                    </TableData>
                    <TableData>
                        Variable
                    </TableData>


                </StyleRow>


            </StylTable>

        </>
    );
}
export default TuitionFeeTable;