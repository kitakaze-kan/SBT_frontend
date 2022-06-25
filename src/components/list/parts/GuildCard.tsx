import { GuildItem } from "@/interfaces/guild";
import { FC } from "react";
import { Card } from "react-daisyui";

type GuildCardProps = {
    item: GuildItem
}
export const GuildCard:FC<GuildCardProps> = ({item}) => {

    

    return (
        <Card className="bg-card w-auto h-fit mx-2">
            <Card.Image
            src={item.uri}
            alt="image"
            />
            <Card.Body>
                <Card.Title tag="h2">{item.description}</Card.Title>
                <p>{`oracleContract: ${item.oracleContract}`}</p>
                <p>{`rewardToken: ${item.rewardToken}`}</p>
                <p>{`rewardAmount: ${item.rewardAmount}`}</p>
                <p>{`totalRewardAmount: ${item.totalRewardAmount}`}</p>
            </Card.Body>
        </Card>
    )
}