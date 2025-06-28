import { EmbedBuilder } from 'discord.js';
import { EchoEmbed } from '../novabot';

/*
export function isDST(d: Date) {
  let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== d.getTimezoneOffset();    
}
*/
export function echoEmbed(): EchoEmbed {
  const embed = new EmbedBuilder()
    .setColor(0x59c5ff)
    .setTitle("⋆✦⋆ jude's timezone! ⋆✦⋆")
    .setDescription(`Hey! Here\'s some info on <@1069457575315243008>\'s timezone!`)
    .setFields(
      { name: 'Timezone', value: 'Central Daylight Time (UTC-5)' },
      { name: 'Her 12:00 PM', value: '<t:1751043600:t> in your timezone' }
    )
  return { embed, text: "" };
}

export function echoText(): string {
  return '⋆✦⋆ nova\'s timezone! ⋆✦⋆\n' +
    'Hey! Here\'s some info on <@1069457575315243008>\'s timezone!\n' +
    'She is in Central Daylight Time, which is UTC-5.\n' +
    'Her 12:00 PM is <t:1751043600:t> in your timezone.';
};