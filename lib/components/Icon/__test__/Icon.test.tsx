import * as React from "react";
import * as Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
const { render } = Enzyme;



import Icon from ".."

describe("Icon",()=>{
    test("icon快照测试",()=>{
        const element = render(<Icon type="loading" />)
        // 生成快照
        expect(toJson(element)).toMatchSnapshot();
    })
})