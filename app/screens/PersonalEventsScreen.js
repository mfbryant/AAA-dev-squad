import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import EventListItem from "../assets/components/EventListItem";
import EventListItemAction from "../assets/components/EventListItemAction";
import Icon from "../assets/components/IconButton";
import EventScreen from "../assets/components/EventScreen";
import colors from "../assets/config/colors";

const sampleEvents = [
  {
    eventId: 1,
    eventName: "Welcome Back Bash",
    startDate: "2021-09-19T12:00:00",
    endDate: "2021-09-07T18:30:00",
    location: "UA Rec Fields",
    eventDeets: "Come out for a good time of catching up, food, and kickball!",
    orgId: 4,
    eventDraft: false,
    eventPending: false,
    eventApproved: true,
    userId: 1,
  },
  {
    eventId: 2,
    eventName: "Welcome Back Bash",
    startDate: "2021-08-07T12:35:00",
    endDate: "2021-09-07T17:33:00",
    location: "UA Rec Fields",
    eventDeets: "Come out for a good time of catching up, food, and kickball!",
    orgId: 3,
    eventDraft: false,
    eventPending: true,
    eventApproved: false,
    userId: 1,
  },
];

const favoriteData = [
  {
    favoriteId: 1,
    eventId: 2,
    userId: 1,
  },
  {
    favoriteId: 2,
    eventId: 1,
    userId: 2,
  },
];

const user = {
  userId: 1,
  userName: "Mattie Bryant",
  userEmail: "mfbryant@crimson.ua.edu",
  executive: true,
  officer: false,
  orgId: 4,
};

function PersonalEventsScreen({ navigation }) {
  const [personal, setPersonal] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [eventData, setEventData] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const [orgData, setOrgData] = useState([]);
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      setRefreshing(true);
      const response1 = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/events"
      );
      // const response2 = await fetch(
      //   "https://aims-ambassadorship-app.herokuapp.com/api/favorites"
      // );
      const response3 = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/organizations"
      );
      const response4 = await fetch(
        "https://aims-ambassadorship-app.herokuapp.com/api/users"
      );
      const json1 = await response1.json();
      // const json2 = await response2.json();
      const json3 = await response3.json();
      const json4 = await response4.json();
      setOrgData(json3);
      setEventData(json1);
      // setFavorites(json2);
      setUserData(json4);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePersonal = () => {
    !personal ? setPersonal(true) : setPersonal(false);
  };

  const handleFavorite = () => {
    !favorite ? setFavorite(true) : setFavorite(false);
  };

  //Necessary for no errors when filling in data on add page
  var item = [null];

  return (
    <EventScreen
      barChildren={
        <View style={styles.bar}>
          <View style={styles.barItem}>
            <Icon
              name="arrow-left"
              color={colors.white}
              onPress={() => navigation.navigate("Home")}
              size={25}
            />
          </View>
          <View style={[{ justifyContent: "center" }, styles.barItem]}>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.barText}>
              {personal
                ? user.executive
                  ? "Need Approval"
                  : "Your Events"
                : favorite
                ? "Favorites"
                : "Events"}
            </Text>
          </View>
          <View style={[{ justifyContent: "flex-end" }, styles.barItem]}>
            <View style={styles.iconRow}>
              {!personal && (
                <Icon
                  name="playlist-star"
                  color={colors.white}
                  onPress={handleFavorite}
                  size={25}
                />
              )}
              {user.executive || user.officer ? (
                <>
                  <Icon
                    name="school"
                    color={colors.white}
                    onPress={handlePersonal}
                    size={25}
                    style={{ marginRight: 10, marginLeft: 10 }}
                  />
                  <Icon
                    name="plus"
                    color={colors.white}
                    onPress={() =>
                      navigation.navigate("Add Event", {
                        eventData,
                        orgData,
                        event: item,
                        user,
                      })
                    }
                    size={25}
                  />
                </>
              ) : null}
            </View>
          </View>
        </View>
      }
    >
      <View style={styles.list}>
        <FlatList
          data={
            personal
              ? eventData.sort((a, b) =>
                  b.eventId.toString().localeCompare(a.eventId.toString())
                )
              : eventData.sort((a, b) => a.startDate.localeCompare(b.startDate))
          }
          extraData={orgData}
          keyExtractor={({ eventId }) => eventId.toString()}
          renderItem={({ item }) => (
            <EventListItem
              // Change favoriteData to favorites once in SQL
              show={
                personal
                  ? user.executive
                    ? item.eventPending
                    : item.orgId === user.orgId
                  : favorite
                  ? item.eventApproved &&
                    favoriteData.filter(
                      (f) =>
                        f.eventId === item.eventId && f.userId === user.userId
                    ).length > 0
                  : new Date(
                      new Date(
                        new Date(item.startDate).setHours(
                          new Date(item.endDate).getHours()
                        )
                      ).setMinutes(new Date(item.endDate).getMinutes())
                    ) >= new Date() && item.eventApproved
              }
              org={orgData[item.orgId - 1].orgName}
              title={item.eventName}
              subTitle={item.location}
              date={item.startDate}
              drafted={item.eventDraft}
              pending={item.eventPending}
              approved={item.eventApproved}
              statusShow={personal}
              onPress={() => {
                item.eventDraft
                  ? navigation.navigate("Add Event", {
                      eventData,
                      orgData,
                      event: item,
                      user,
                    })
                  : navigation.navigate("Event Details", {
                      personal,
                      userData,
                      user,
                      orgData,
                      event: item,
                    });
              }}
              renderRightActions={() =>
                !personal && <EventListItemAction event={item} user={user} />
              }
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setOrgData(orgData);
            setEventData(eventData);
            setRefreshing(false);
          }}
        />
      </View>
    </EventScreen>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  barItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  separator: {
    width: "100%",
    height: 1,
  },
  barText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.white,
  },
  bar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 7,
  },
  iconRow: {
    flexDirection: "row",
  },
});

export default PersonalEventsScreen;
