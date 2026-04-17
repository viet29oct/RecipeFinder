import { router } from 'expo-router';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RecipeCard from '../../components/RecipeCard';
import { BorderRadius, Colors, Spacing, Typography } from '../../constants/theme';
import { recipes } from '../../data/recipes';

const DISPLAY_RECIPES = recipes.slice(0, 6);
const CATEGORIES = ['Tất cả', 'Món nước', 'Cơm', 'Nướng', 'Tráng miệng'];

export default function HomeScreen() {
  const renderItem = ({ item, index }: { item: (typeof recipes)[0]; index: number }) => {
    if (index % 2 === 0) {
      const nextItem = DISPLAY_RECIPES[index + 1];
      return (
        <View style={styles.row}>
          <RecipeCard recipe={item} />
          {nextItem ? <RecipeCard recipe={nextItem} /> : <View style={{ flex: 1 }} />}
        </View>
      );
    }
    return null;
  };

  const evenItems = DISPLAY_RECIPES.filter((_, i) => i % 2 === 0);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <FlatList
        data={evenItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View>
            {/* Header */}
            <View style={styles.header}>
              <View>
                <Text style={styles.greeting}>Xin chào 👋</Text>
                <Text style={styles.headerTitle}>Hôm nay ăn gì?</Text>
              </View>
              <View style={styles.headerActions}>
                <TouchableOpacity
                  style={styles.searchButton}
                  onPress={() => router.push('/search')}
                >
                  <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.logoutButton}
                  onPress={() => router.replace('/login')}
                >
                  <Text style={styles.logoutIcon}>🚪</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Banner */}
            <View style={styles.banner}>
              <View style={styles.bannerContent}>
                <Text style={styles.bannerLabel}>ĐẶC SẮC HÔM NAY</Text>
                <Text style={styles.bannerTitle}>Khám phá{'\n'}ẩm thực Việt</Text>
                <TouchableOpacity
                  style={styles.bannerButton}
                  onPress={() => router.push('/search')}
                >
                  <Text style={styles.bannerButtonText}>Xem tất cả →</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.bannerEmoji}>🍜</Text>
            </View>

            {/* Categories */}
            <View style={styles.categoriesHeader}>
              <Text style={styles.sectionTitle}>Món ngon gợi ý</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  greeting: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs / 2,
  },
  headerTitle: {
    ...Typography.h1,
    color: Colors.textPrimary,
  },
  headerActions: {
    flexDirection: 'row',
    gap: Spacing.sm,
    alignItems: 'center',
  },
  searchButton: {
    width: 44,
    height: 44,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 20,
  },
  logoutButton: {
    width: 44,
    height: 44,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  logoutIcon: {
    fontSize: 20,
  },
  banner: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
  },
  bannerLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 1.5,
    marginBottom: Spacing.xs,
  },
  bannerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    lineHeight: 28,
    marginBottom: Spacing.md,
  },
  bannerButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  bannerButtonText: {
    ...Typography.caption,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  bannerEmoji: {
    fontSize: 72,
    marginLeft: Spacing.sm,
  },
  categoriesHeader: {
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    ...Typography.h2,
    color: Colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
});
