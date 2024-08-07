import React from "react";
import {Button, UncontrolledPopover, PopoverHeader, PopoverBody} from "reactstrap";

function R051_ReactstrapPopover() {
    return (
        <>
        <Button id='popover_id' type='button'>
            Popover button
        </Button>
        <UncontrolledPopover placement="right" target='popover_id'>
            <PopoverHeader>React 실습</PopoverHeader>
            <PopoverBody>
                여기는 바디 영역입니다.
            </PopoverBody>
        </UncontrolledPopover>
        </>
    )
}

export default R051_ReactstrapPopover;