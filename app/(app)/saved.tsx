import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { RecipeCardWide } from '../../components/RecipeCard';
import { BorderRadius, Colors, Spacing, Typography } from '../../constants/theme';
import { recipes } from '../../data/recipes';
import { useSavedRecipes } from '../../contexts/SavedRecipesContext';

export default function SavedScreen() {
  const { savedIds } = useSavedRecipes();
  const savedRecipes = recipes.filter((recipe) => savedIds.includes(recipe.id));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <FlatList
        data={savedRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <RecipeCardWide recipe={item} />
          </View>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Món đã lưu ❤️</Text>
            <Text style={styles.subtitle}>
              Bạn đã lưu {savedRecipes.length} món để xem lại và nấu nhanh.
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>Chưa có món nào được lưu</Text>
            <Text style={styles.emptySubtitle}>Hãy bấm tim ở món bạn thích để lưu lại.</Text>
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
  list: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
  },
  header: {
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  title: {
    ...Typography.h2,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
  },
  cardWrapper: {
    marginBottom: Spacing.xs,
  },
  empty: {
    alignItems: 'center',
    marginTop: Spacing.xxl,
    padding: Spacing.lg,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  emptyTitle: {
    ...Typography.bodyBold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  emptySubtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
