const channelNamesList = ["email", "mobile", "discord", "other"] as const;
export type channelNames = typeof channelNamesList[number];

export { channelNamesList}
