
#####################################################################################33
#
#	Here begins the section on  1 of the following tracks: 1 stem (0), eight perfromance (1-8)
#   Later to be expanded to all songs
#   All song sneed to have  8 perfromacnes min. (! Brown Eyed Girl)
#
#
#
#
#
#
#
#
#
#
#
#
import numpy as np
from sklearn.linear_model import LinearRegression

import matplotlib.pyplot as plt
from numpy import *
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score

Y    = np.array([100,    85,    55,    70,    70,    85,    85,    85,    55] )

Student    = [0,1,2,3,4,5,6,7,8]
x_precision        = [0.996,0.802,0.885,0.488,0.44,0.553,0.759,0.482,0.617]
x_recall        = [0.958,0.802,0.885,0.488,0.44,0.553,0.759,0.482,0.617]
x_f_measure_value        = [0.977,0.802,0.885,0.488,0.44,0.553,0.759,0.482,0.617]
x_Onset_ABS_Mean    = [    0.027407,0.026,0.016,0.026,0.034,0.023,0.027,0.031,0.025]
x_Onset_Mean    = [    0.027407,0.017,0.003,-0.018,0.005,-0.001,0.027,-0.029,-0.001]
x_Onset_Std        = [0.031882,0.031,0.022,0.031,0.037,0.028,0.032,0.036,0.029]
x_Duration_ABS_Mean        = [0.038446,0.027,0.04,0.036,0.041,0.033,0.038,0.051,0.04]
x_Duration_Mean    =[    0.00571,0.014,-0.033,-0.023,-0.02,-0.017,0.006,-0.02,-0.01]
x_Duration_Std        = [0.045769,0.035,0.046,0.043,0.048,0.04,0.046,0.054,0.047]


y_onsetMark        =array( [100,85,55,70,70,85,85,85,55])
y_DurationMark        =array( [100,85,70,85,85,85,100,85,70])
y_articulationMark    =array( [100,70,70,85,85,70,100,85,85])
y_soundQualityMark        = array([100,85,70,85,85,85,85,55,70])
y_volumeControlMark        = array([100,85,70,100,85,85,100,70,85])
y_finalMark        =  array([5,4,3,4,4,3,4.5,2,3])
X= array([x_precision,    x_recall    ,x_f_measure_value    ,x_Onset_ABS_Mean,x_Onset_Mean,x_Onset_Std,x_Duration_ABS_Mean,x_Duration_Mean,x_Duration_Std])
print(X.shape)
Xnew= X.transpose()


from sklearn import metrics
y = y_onsetMark
# Split the data into training/testing sets
X_train = X[:-5]
X_test = X[-5:]

# Split the targets into training/testing sets
y_train = y[:-5]
y_test = y[-5:]

# Create linear regression object
regr = linear_model.LinearRegression()
print(X_train.shape,y_train.shape)
# Train the model using the training sets
regr.fit(X_train, y_train)

# Make predictions using the testing set
y_pred = regr.predict(X_test)
# The coefficients
print('Coefficients: \n', regr.coef_)
# The mean squared error
print('Mean absolute error: %.2f' % metrics.mean_absolute_error(y_test, y_pred))
# The coefficient of determination: 1 is perfect prediction
print('Coefficient of determination: %.2f' % r2_score(y_test, y_pred))

# Plot outputs
#plt.scatter(X_test, y_test,  color='black')
#plt.plot(X_test, y_pred, color='blue', linewidth=3)

#plt.xticks(())
#plt.yticks(())
#plt.show()

reg = LinearRegression().fit(Xnew, Y)
print(reg)
##################### Load the diabetes dataset
######################################
#regr.fit(diabetes_X_train, diabetes_y_train)
regr.fit(X, Y)
y_pred = regr.predict(X)
#plt.plot(X,Y, 'x')
#plt.show()
                                    
# The coefficients
print('Coefficients: \n', regr.coef_)
# The mean absolute error
print('Mean abs  error: %.2f'      % metrics.mean_absolute_error(Y, y_pred))

# The coefficient of determination: 1 is perfect prediction
print('Coefficient of determination: %.2f'  % r2_score(Y, y_pred))
#plt.plot(X2,Y, 'x')
#plt.show()
#plt.xticks(())
#plt.yticks(())
#plt.show()

print(X.shape)
X_new = X.transpose()
print(X_new.shape)

from sklearn.model_selection import LeaveOneOut
#X = np.array([[1, 2], [3, 4]])
X= array([x_precision,    x_recall    ,x_f_measure_value    ,x_Onset_ABS_Mean,x_Onset_Std,x_Duration_ABS_Mean,x_Duration_Std])

y = y_finalMark #np.array([1, 2])
loo = LeaveOneOut()
loo.get_n_splits(X)

for train_index, test_index in loo.split(X):
     print("TRAIN:", train_index, "TEST:", test_index)
     X_train, X_test = X[train_index], X[test_index]
     y_train, y_test = y[train_index], y[test_index]
     print(X_train, X_test, y_train, y_test)
     
#X = dataset[['P', 'R', 'F',  ' ABS Mean Onset','Mean  Onset','Std Onset',' ABS Mean Duration','Mean Duration','Std Duration']]
X = dataset[['P', 'R', 'F',  ' ABS Mean Onset','Mean  Onset','Std Onset']]
print(X.shape)
y = array([200    ,165    ,115    ,150    ,150    ,145    ,175    ,125    ,115])
print(y_onset_total.shape)

from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train)

coeff_df = pd.DataFrame(regressor.coef_, X.columns, columns=['Coefficient'])

y_pred = regressor.predict(X_test)

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=0)

from sklearn.linear_model import *
regressor = LinearRegression()
regressor.fit(X_train, y_train)

y_pred = regressor.predict(X_test)

df = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})
from sklearn import metrics
print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred))
print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))

