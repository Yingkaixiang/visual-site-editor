import { createSection } from "@/util/mock";
import { addInlineStyleUnit } from "@/util/unit";

describe("工具方法测试", () => {
  it("创建区域数据成功", () => {
    const section = createSection("fixed", "flow-temp", 200);
    expect(section.positionType).toBe("fixed");
    expect(section.type).toBe("flow-temp");
    expect(section.styles.height).toBe(200);
  });

  it("给 css 属性添加单位成功", () => {
    const value1 = addInlineStyleUnit(90, "px");
    expect(value1).toBe("90px");
    const value2 = addInlineStyleUnit(0, "rem");
    expect(value2).toBe("0rem");
    const value3 = addInlineStyleUnit(200, "%");
    expect(value3).toBe("200%");
  });
});
