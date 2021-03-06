import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'guide',
            description: 'Lists All Kaoi Guides',
            category: 'bots',
            usage: `${client.config.prefix}guide`,
            baseXp: 200
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        let text = ''
        text += '*š¾ Kaoi š¾*\n'
        text += '*š README* : https://github.com/PrajjwalDatir/Kaoi#readme\n'
        text += '*š FEATURES* : https://github.com/PrajjwalDatir/Kaoi/blob/main/Features.md\n'
        text += '*š CONTRIBUTERS* : https://github.com/PrajjwalDatir/Kaoi/graphs/contributors\n'
        text += '*š FAQ* : https://github.com/PrajjwalDatir/Kaoi/blob/main/Troubleshooting%20and%20faq.md\n'
        text += '\n*š¾ DEPLOY GUIDES š¾*\n'
        text += `*š Deploy Video Guide š : https://www.youtube.com/watch?v=tsCCmxeklHw*
            Follow this video Guide but instead of using the *WhatsApp Botto Xre* Link, use the *Kaoi Github Link* given above.\n`
        text += 'š Deploy Text Guide (Detailed) š : https://github.com/Hiroto77/Kaoi-Guides#readme\n'
        text += '\nš¾ SPECIFIC GUIDES š¾\n'
        text += 'š How to get the ChatBot URL : https://github.com/Hiroto77/Kaoi-Guides/blob/main/Chat_Bot_Url.md\n'
        text += `š How to use ${this.client.config.prefix}sticker effectively : https://github.com/Hiroto77/Kaoi-Guides/blob/main/Sticker-feature-Guide.md\n`
        text +=
            'š How to get the MongoDB URL : https://github.com/Hiroto77/Kaoi-Guides/blob/main/Mongo-Atlas-guide.md\n'
        text += 'š App sleeping? : https://www.youtube.com/watch?v=B9SvhFWKloM\n'
        text += '\n_Thank You for using Kaoi. Help others setup Kaoi by contribution to Kaoi Guides_'
        return void M.reply(text).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
