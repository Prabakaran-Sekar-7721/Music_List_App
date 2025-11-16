import { StyleSheet } from "react-native";
import { colors } from "./colors.ts";

export const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  // Text Styles
  textPrimary: {
    color: colors.textPrimary,
    fontSize: 16,
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  textPrimaryLarge: {
    color: colors.textPrimary,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSecondaryLabel: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  textSecondaryValue: {
    color: colors.textSecondary,
    fontSize: 26,
    margin: 8,
  },
  textWhite: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  textWhiteSmall: {
    color: 'white',
    margin: 20,
  },

  // Card Styles
  card: {
    alignSelf: "center",
    backgroundColor: colors.cardBackground,
    width: "95%",
    height: 70,
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    justifyContent: "center",
    flex: 2,
    flexDirection: "row",
  },

  // Track Item Styles
  trackImageContainer: {
    height: '100%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackImage: {
    width: 55,
    height: 55,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ffffff55',
  },
  trackInfoContainer: {
    height: '100%',
    justifyContent: 'center',
    width: '65%',
    rowGap: 8,
    paddingLeft: 10,
  },
  trackActionContainer: {
    height: '100%',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Track Details Page Styles
  detailsImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
    marginTop: 20,
  },
  detailsImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff55',
  },
  detailsInfoContainer: {
    width: '100%',
    flexDirection: 'column',
    rowGap: 10,
    padding: 10,
  },
  detailsFieldContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  detailsButtonContainer: {
    flex: 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadButton: {
    padding: 15,
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#1DB954ff',
    borderRadius: 100,
  },

  // Header Styles
  headerContainer: {
    backgroundColor: '#1DB954ff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
  },
  headerBackButton: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    flex: 1,
  },

  // Modal Styles
  modalContainer: {
    backgroundColor: colors.modalBackground,
    flexDirection: "column",
    rowGap: 10,
    flex: 1,
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  loadingIndicatorContainer: {
    backgroundColor: colors.cardBackground,
    width: 200,
    borderRadius: 15,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -100,
    marginTop: -75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingPercentageSpacing: {
    margin: 20,
  },
});
