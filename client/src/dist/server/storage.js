export class MemStorage {
    usersMap = new Map();
    pathsMap = new Map();
    modulesMap = new Map();
    quizzesMap = new Map();
    quizOptionsMap = new Map();
    userProgressMap = new Map();
    userId = 1;
    pathId = 1;
    moduleId = 1;
    quizId = 1;
    quizOptionId = 1;
    userProgressId = 1;
    // User methods
    async getUser(id) {
        return this.usersMap.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.usersMap.values()).find(user => user.username === username);
    }
    async getUserByEmail(email) {
        return Array.from(this.usersMap.values()).find(user => user.email === email);
    }
    async createUser(insertUser) {
        const id = this.userId++;
        const user = { id, ...insertUser };
        this.usersMap.set(id, user);
        return user;
    }
    // Path methods
    async getAllPaths() {
        return Array.from(this.pathsMap.values());
    }
    async getPath(id) {
        return this.pathsMap.get(id);
    }
    async getPathBySlug(slug) {
        return Array.from(this.pathsMap.values()).find(path => path.slug === slug);
    }
    async createPath(insertPath) {
        const id = this.pathId++;
        const path = { id, ...insertPath };
        this.pathsMap.set(id, path);
        return path;
    }
    // Module methods
    async getModule(id) {
        return this.modulesMap.get(id);
    }
    async getModulesByPathId(pathId) {
        return Array.from(this.modulesMap.values())
            .filter(module => module.pathId === pathId)
            .sort((a, b) => a.order - b.order);
    }
    async createModule(insertModule) {
        const id = this.moduleId++;
        const module = { id, ...insertModule };
        this.modulesMap.set(id, module);
        return module;
    }
    // Quiz methods
    async getQuiz(id) {
        return this.quizzesMap.get(id);
    }
    async getQuizzesByModuleId(moduleId) {
        return Array.from(this.quizzesMap.values()).filter(quiz => quiz.moduleId === moduleId);
    }
    async createQuiz(insertQuiz) {
        const id = this.quizId++;
        const quiz = { id, ...insertQuiz };
        this.quizzesMap.set(id, quiz);
        return quiz;
    }
    // Quiz Option methods
    async getQuizOption(id) {
        return this.quizOptionsMap.get(id);
    }
    async getQuizOptionsByQuizId(quizId) {
        return Array.from(this.quizOptionsMap.values()).filter(option => option.quizId === quizId);
    }
    async createQuizOption(insertOption) {
        const id = this.quizOptionId++;
        const option = { id, ...insertOption };
        this.quizOptionsMap.set(id, option);
        return option;
    }
    // User Progress methods
    async getUserProgress(userId) {
        return Array.from(this.userProgressMap.values()).filter(progress => progress.userId === userId);
    }
    async updateUserProgress(progressData) {
        const key = `${progressData.userId}-${progressData.pathId}-${progressData.moduleId}`;
        let progress = this.userProgressMap.get(key);
        if (progress) {
            // Update existing progress
            progress = {
                ...progress,
                ...progressData,
                lastUpdated: new Date(),
            };
        }
        else {
            // Create new progress entry
            const id = this.userProgressId++;
            progress = {
                id,
                userId: progressData.userId,
                pathId: progressData.pathId,
                moduleId: progressData.moduleId,
                completed: progressData.completed ?? false,
                score: progressData.score ?? 0,
                lastUpdated: new Date(),
            };
        }
        this.userProgressMap.set(key, progress);
        return progress;
    }
    // Initialize with demo data
    constructor() {
        // Sample demo data could be initialized here
        // For the prototype this is not needed as we're using client-side mock data
    }
}
export const storage = new MemStorage();
