import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { EchoEmbed } from "../novabot";

export function echoEmbed(): EchoEmbed {
  const embed = new EmbedBuilder()
    .setColor(0x7932a8)
    .setTitle('ping jude lol')
    .setDescription(null)
  const pingJude = new ButtonBuilder()
        .setCustomId('ping-jude')
        .setLabel('ping jude')
        .setStyle(ButtonStyle.Success);
  const row = new ActionRowBuilder()
    .addComponents(pingJude) as ActionRowBuilder<ButtonBuilder>; 
  return { embed, text: '', components: new Array(row) };
}

export function echoText(): string {
  return 'no embeds??? nobody gets to ping jude with the button then.'
}
