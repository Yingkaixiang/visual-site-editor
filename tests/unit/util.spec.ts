import { createSection } from "@/util/mock";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const section = createSection("fixed", "flow-temp", "200px");
    expect(section.positionType).toBe("fixed");
    expect(section.type).toBe("flow-temp");
    expect(section.styles.height).toBe("200px");
  });
});
