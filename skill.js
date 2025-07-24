function calculateSkillLevel(skillPoints) {
    if (skillPoints < 0) {
        throw new Error("Skill points cannot be negative");
    }
    return Math.floor(skillPoints / 10);
}