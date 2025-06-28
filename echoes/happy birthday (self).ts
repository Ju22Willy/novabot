import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { EchoEmbed } from "../novabot";

export function echoEmbed(): EchoEmbed {
  const embed = new EmbedBuilder()
    .setColor(0x7932a8)
    .setTitle('🎂')
    .setDescription('It\'s not my creator\'s birthday today!')
  const sendCake = new ButtonBuilder()
		.setCustomId('send-cake')
		.setLabel('Send Cake 🎂')
		.setStyle(ButtonStyle.Success);
  const row = new ActionRowBuilder()
	.addComponents(sendCake) as ActionRowBuilder<ButtonBuilder>; 
  return { embed, text: 'Happy not birthday to <@1069457575315243008>!', components: new Array(row) };
}

export function echoText(): string {
  return 'no embeds???'
}
