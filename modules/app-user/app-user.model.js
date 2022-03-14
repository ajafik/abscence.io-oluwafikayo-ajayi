module.exports = mongoose => {
    const AppUser = mongoose.model(
        "app-user",
        mongoose.Schema(
            {
                name: String,
                appId: String,
                appKey: String,
                isActive: Boolean
            },
            { timestamps: true }
        )
    );
    return AppUser;
};