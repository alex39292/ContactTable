public with sharing class ContactController {
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        return [SELECT Id, FirstName, LastName, Email, AccountId, MobilePhone, Created_Date__c FROM Contact];
    }
}