const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const fs = require("fs");
const humanizeduration = require("humanize-duration");

exports.run = async (message, args, client, prefix) => {
  try {
    if (args.length > 0) {
        snekfetch.get("https://skimdb.npmjs.com/registry/" + args[0].toLowerCase()).then((body) => {
            message.channel.send({
                embed: {
						title: "NPM package",
						color: 3553598,
						fields: [
							{
								name: "▪ Name",
								value: body.body.name,
								inline: false
                            },
                            {
								name: "▪ Description",
								value: body.body.description,
								inline: false
                            },
							{
								name: "▪ Author",
								value: body.body.author.name,
								inline: false
							},
							{
								name: "▪ Latest",
								value: body.body["dist-tags"].latest,
								inline: false
							},
							{
								name: "▪ GitHub",
								value: ((body.body.repository) ? body.body.repository.url.replace("git+", "").replace(".git", "").replace("git://", "https://").replace("git@github.com:", "https://github.com/") : "No Repository"),
								inline: false
							},
							{
								name: "▪ Maintainers",
								value: body.body.maintainers.map((m) => m.name).join(", "),
								inline: false
							},
							{
								name: "▪ Last Updated",
								value: humanizeduration(Date.now() - new Date(body.body.time[body.body["dist-tags"].latest]).getTime(), {
									round: false,
									largest: 2
								}),
								inline: false
                            }
						]
                }
            })
        }).catch((error) => {
            if (error.status === 404) return message.channel.send({
                embed: {
                    title: ":x: >>Failed to fetch npm package<<",
                    color: 3553598
                }
            })
            console.error(":x: >>Failed to get that npm package<<", error.message);
            message.reply("NPM Package **" + args[0] + "** was not found") 
        })
    } else {
        message.channel.send({
				embed: {
					title: ":x: >>Please use this format `>>npm <name>`<<",
					color: 3553598,
					description: "Missing `<name>` argument."
				}
			});
    }
  } catch (e) {
    console.log(`[Error] [Commands] (npm) >> ${e}`);
  }
}

exports.help = {
  name: 'npm',
  description: 'Allows You To Look Up Any Npm Package From This Bot Your Welcome Developers',
  aliases: [],
  usage: '.npm [npm-module]',
  example: [ '.npm discord.js', '.NPM discord.js' ]
}