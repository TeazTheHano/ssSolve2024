import { View, Text } from 'react-native'
import React from 'react'
import * as CLASS from '../../assets/Class';
import * as SVG from '../../assets/svgXml';
import { RootContext } from '../../data/store';

export default function SearchScreen() {
    const [CurrentCache, dispatch] = React.useContext(RootContext);
    return (
        <CLASS.SSBarWithSaveArea>
            <CLASS.TopBarSS
                wellcome
                title={CurrentCache.user?.name}
                subTitle={'Chúc bạn ngày mới vui vẻ'}
                currentCache={CurrentCache}
            />
        </CLASS.SSBarWithSaveArea>
    )
}