import { StatisticsList, StatisticsItem } from "./Statistics.styled";

export const Statistics = ({followers}) =>{
    return (<StatisticsList>
        <StatisticsItem>777 tweets</StatisticsItem>
        <StatisticsItem>{followers.toLocaleString('en-US')} Followers</StatisticsItem>
    </StatisticsList>)
}