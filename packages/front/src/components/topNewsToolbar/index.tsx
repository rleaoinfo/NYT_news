import React from 'react'
import DropSelect, { ContainerStyle, TitleStyle, InnerContainerStyle } from '../topNewsToolbar/styles'

type topNewsToolbarType = {
    section: string,
    onChange: any,
}

const TopNewsToolbar = ({ section, onChange }: topNewsToolbarType) => {

    return (
        <ContainerStyle>
            <InnerContainerStyle>
                <TitleStyle>NYT News</TitleStyle>
                <DropSelect onChange={onChange} value={section} >
                    <option value="science">Science</option>
                    <option value="technology">Technology</option>
                </DropSelect>
            </InnerContainerStyle>
        </ContainerStyle>
    );
}

export default TopNewsToolbar;