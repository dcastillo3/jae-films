import React from 'react';
import { InDevelopmentContainer } from './inDevelopmentStyledComponents';
import { Text, cardProps } from '../../styled';
import { useMediaQuery } from '../../../hooks';

function InDevelopment() {
    const { isDesktop } = useMediaQuery();
    const inDevelopmentContainerPadding = isDesktop ? [5, 8] : [2];

    return (
        <InDevelopmentContainer $variant={cardProps.variant.background} $p={inDevelopmentContainerPadding}>
            <Text>In Development</Text>
        </InDevelopmentContainer>
    );
};

export default InDevelopment;