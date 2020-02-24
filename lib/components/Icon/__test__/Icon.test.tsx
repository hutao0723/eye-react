import * as React from "react";
import * as Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
const { render, mount } = Enzyme;

import Icon from ".."

describe("Icon",()=>{
    // 所有测试用例执行之前执行的方法
    let iconNode:any = {};
    beforeAll(() => {
        iconNode = render(<Icon type="loading" className="demo"/>);
    });
    test("icon快照测试",()=>{
        // 生成快照
        expect(toJson(iconNode)).toMatchSnapshot();
    })
    test("icon类型",()=>{
        expect(iconNode.find("use").prop("href")).toBe("#loading")
    })
    test("icon添加className",()=>{
        expect(iconNode.prop("class")).toBe("eye-icon demo")
    })
    test("icon点击事件",()=>{
        const onIconClick = jest.fn();
        const iconClick = mount(<Icon onClick={onIconClick} type="loading" className="demo"/>);
        iconClick.simulate('click');
        expect(onIconClick).toBeCalled();
    })
})