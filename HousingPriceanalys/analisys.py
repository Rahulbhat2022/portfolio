import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("Housing.csv")

# Fill missing values correctly
df.fillna(df.select_dtypes(include=['number']).mean(), inplace=True)  # Fill numeric columns with mean
for col in df.select_dtypes(include=['object']).columns:  # Fill categorical columns with mode
    df[col].fillna(df[col].mode()[0], inplace=True)

# Convert categorical columns to numeric
df = pd.get_dummies(df, drop_first=True)

# Convert "Price" to numeric if it's not already
df["price"] = pd.to_numeric(df["price"], errors="coerce")

# Show first few rows
print(df.head())

# Get dataset info
print(df.info())

# Check for missing values
print(df.isnull().sum())

# Plot correlation heatmap
plt.figure(figsize=(12, 8))
sns.heatmap(df.corr(), annot=True, cmap="coolwarm", fmt=".2f")
plt.title("Feature Correlation Heatmap")
plt.show()

# ✅ FIXED: Histogram for House Prices
plt.figure(figsize=(10, 6))
sns.histplot(df["price"].dropna(), kde=True, bins=30)  # Drop NaNs for safety
plt.xlabel("House Price")
plt.ylabel("Frequency")
plt.title("Distribution of House Prices")
plt.show()
