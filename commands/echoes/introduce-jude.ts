import { CommandInteraction, EmbedBuilder, InteractionResponse, SlashCommandBuilder, TextChannel, time } from 'discord.js';

export const data = new SlashCommandBuilder()
	.setName('introduce-jude')
	.setDescription('Introduces Jude, my operator, to the current channel.');
export async function execute(interaction: CommandInteraction) {
	const age = Math.floor((Date.now() - 1259863200000) / (1000 * 60 * 60 * 24 * 365.25));
	let introMessage: InteractionResponse<boolean>;
	if (interaction.appPermissions.has('EmbedLinks')) {
		const userEmbed = new EmbedBuilder()
			.setColor(0x7932a8)
			.setTitle('⋆✦⋆  𝐣𝐮𝐝𝐞  ⋆✦⋆')
			.setFields(
				{ name: '𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲', value: `Dec 3 (${age} y/o)` },
				{ name: '𝐆𝐞𝐧𝐝𝐞𝐫', value: 'transfem - she/her' },
				{ name: '𝐒𝐞𝐱𝐮𝐚𝐥𝐢𝐭𝐲', value: 'demisexual (pref. for women)' },
				{ name: '𝐇𝐨𝐛𝐛𝐢𝐞𝐬', value: 'add' },
				{ name: '𝐓𝐫𝐢𝐠𝐠𝐞𝐫𝐬', value: 'add' },
				{ name: '𝐁𝐨𝐮𝐧𝐝𝐚𝐫𝐢𝐞𝐬', value: 'change: • Ask to DM\n• Ask to vent\n• No NSFW (suggestive okay)' },
				{ name: '𝐅𝐚𝐧𝐝𝐨𝐦𝐬', value: 'change: Murder Drones, Genshin Impact, Life Series' },
				{ name: '𝐌𝐮𝐬𝐢𝐜', value: 'Derivakat, AJR, Cavetown' },
				{ name: '𝐄𝐱𝐭𝐫𝐚 𝐍𝐨𝐭𝐞𝐬', value: 'I have ADHD and social anxiety, so I may not be very talkative!' },
			)
			.setThumbnail(interaction.user.displayAvatarURL({ size: 1024, forceStatic: false }))
			.setTimestamp()
			.setFooter({ text: interaction.client.user.username, iconURL: interaction.client.user.displayAvatarURL() });
		introMessage = await interaction.reply({ content: "Hi everyone, I'm NovaBot (Jude's Edition)! My operator, <@1069457575315243008>, asked me to introduce her to you, so here we go!", embeds: [userEmbed] });
	} else {
		introMessage = await interaction.reply({
			content: "Hi everyone, I'm NovaBot! My creator, <@1279516012642963528>, asked me to introduce them to you, so here we go!" +
				"⋇⋆✦⋆⋇   𝐧𝐨𝐯𝐚 / 𝐚𝐞𝐥𝐢𝐭𝐡𝐫𝐨𝐧   ⋇⋆✦⋆⋇\n" +
				"✧˖° 𝐁𝐢𝐫𝐭𝐡𝐝𝐚𝐲 ~ June 16 (14 y/o)\n" +
				"✧˖° 𝐆𝐞𝐧𝐝𝐞𝐫 ~ non-binary (they/them)\n" +
				"✧˖° 𝐒𝐞𝐱𝐮𝐚𝐥𝐢𝐭𝐲 ~ omnisexual\n" +
				"✧˖° 𝐇𝐨𝐛𝐛𝐢𝐞𝐬 ~ writing, coding\n" +
				"✧˖° 𝐓𝐫𝐢𝐠𝐠𝐞𝐫𝐬 ~ loud noises, touch\n" +
				"✧˖° 𝐁𝐨𝐮𝐧𝐝𝐚𝐫𝐢𝐞𝐬 ~ ask to DM | ask to vent | no NSFW (suggestive okay)\n" +
				"✧˖° 𝐅𝐚𝐧𝐝𝐨𝐦𝐬 ~ Murder Drones, Genshin Impact, Life Series\n" +
				"✧˖° 𝐌𝐮𝐬𝐢𝐜 ~ Derivakat, AJR, Cavetown\n" +
				"✧˖° 𝐄𝐱𝐭𝐫𝐚  𝐍𝐨𝐭𝐞𝐬 ~ I have ADHD and social anxiety, so I may not be very talkative!"
		});

	}
	// logging so I don't forget where I introduced myself with the bot
	const introLog = interaction.client.guilds.cache.get("1278402411790078142")?.channels.cache.get("1388616259796467963") as TextChannel;
	introLog.send({ content: `Hey, I just introduced you at ${(await introMessage.fetch()).url}!` });
};